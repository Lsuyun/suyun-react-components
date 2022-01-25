<!--
 * @Author: liusuyun
 * @Date: 2022-01-24 17:15:50
 * @LastEditors: liusuyun
 * @LastEditTime: 2022-01-24 22:45:01
 * @Description:
-->

## Foo

Demo:

```tsx
import React, { useState } from 'react';

import { Foo } from 'suyun-react-components';

export default () => {
  const [msg, setMsg] = useState('11111');
  return <Foo title={msg} />;
};
```

<code src="./index.test.tsx"></code>

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
