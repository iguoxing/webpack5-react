/*
 * @Author: your name
 * @Date: 2021-11-14 14:17:07
 * @LastEditTime: 2021-11-14 14:17:08
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react_webpack5/webpack5-react/.eslintrc.js
 */
/*
 * @Author: your name
 * @Date: 2021-11-14 14:17:07
 * @LastEditTime: 2021-11-14 14:17:07
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react_webpack5/webpack5-react/.eslintrc.js
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
// yarn add @umijs/fabric -D
module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    globals: {},
    plugins: ['react-hooks'],
    rules: {
      'no-restricted-syntax': 0,
      'no-param-reassign': 0,
      'no-unused-expressions': 0,
    },
  };
