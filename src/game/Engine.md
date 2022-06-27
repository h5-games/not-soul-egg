## 游戏引擎运算

```javascript
符号描述：
= 用于判断某变量是否符合某值
: 对某只进行赋值
+ 正值
- 负值
~ 值的范围区间 （x~y，x和y都在可选范围内）
> 一般用于值的大小条件判断，特殊情况：ELEMENT>FIRE 判断是否包含火元素、PROP>1 表示判断当前人是否有ID是1的物品
< 同上，相反
& 多个条件链接并且关系
| 多个条件或者关系

关键字描述：
TIP 该步骤为提示
SELECT 该步骤为选择
TIME 由数字和~组成 表示该事件只能出现再某时间点或范围
SOUL 魂力值变化 SOUL:+(100~120) 表示魂力增加 100~120 中间的随机值
GOLD 金属性值变化
WOOD 木属性值变化
WATER 水属性值变化
FIRE 火属性值变化
EARTH 土属性值变化
ELEMENT 人物初始的元素 ELEMENT>FIRE 判断这个人是否有火属性
PROP 道具物品 PROP:[100]+1 获取1件ID为100的物品
DAMAGE 伤害值

函数：
RESULT(id) 获取指定 SELECT 阶段的选择结果
```