import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import stylesе from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;




  interface Obj {
    deviceType: string;
    power: number;
    deviceTitle: string;
    condition: string;
    color: string;
    task: string;

  }

  type SomeConstructor = {
    new(title: string, power: number, color: string, task: string): Obj;
  }

  function Device(this: Obj, title: string, power: number, color: string, task: string) {

    this.deviceType = 'electronic';
    this.power = power;
    this.deviceTitle = title;
    this.condition = 'OFF';
    this.color = color;
    this.task = task;
  }

  Device.prototype.switch = function () {

    this.condition = confirm(`Включить ${this.deviceTitle}?`) ? 'ON' : 'OFF';
  }

  Device.prototype.checkSwitch = function () {

    if (this.condition == 'ON') {
      console.log(`${this.deviceTitle} включен!  Его мощность ${this.power} Вт`)
    } else {
      console.log(`${this.deviceTitle} выключен.`)
    }
  }

  const computer = new Device('Компьютер', 500, 'white', 'education');


  return (
    <div>
      <div className={stylesе.row}>
        <button
          className={stylesе.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={stylesе.value}>{count}</span>
        <button
          className={stylesе.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={stylesе.row}>
        <input
          className={stylesе.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={stylesе.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={stylesе.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={stylesе.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
