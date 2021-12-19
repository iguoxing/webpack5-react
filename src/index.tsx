/*
 * @Author: your name
 * @Date: 2021-11-14 13:37:35
 * @LastEditTime: 2021-11-20 19:32:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react_webpack5/webpack5-react/src/index.js
 */
/*
 * @Author: your name
 * @Date: 2021-11-14 13:37:35
 * @LastEditTime: 2021-11-14 13:37:35
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react_webpack5/webpack5-react/src/index.js
 */
// Copyright 2021 zhaoguoxing
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TS 案例1：函数传值
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Ardan", new Date());

const App = () => {
    return <div>hello world2</div>;
};
