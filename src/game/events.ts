/*
符号描述：
= 用于判断某变量是否符合某值
: 对某只进行赋值
+ 正值
- 负值
~ 值的范围区间，随机获取
> 一般用于值的大小条件判断，特殊情况：ELEMENT>FIRE 判断是否包含火元素、ITEM>1 表示当前人是否有ID是1的物品
< 同上，相反
& 多个条件链接并且关系（或者逻辑的话不需要，数组里面每项之间都是或者逻辑，满足一个条件即可）

关键字描述：
TIP 该步骤为提示
SELECT 该步骤为选择
STEP 由数字横杠数字组成 第一个数字代表阶段，第二个数字代表具体的哪一步 STEP=1-1 表示该事件只能在第一阶段第一步出现
SOUL 魂力值变化 SOUL:+(100~120) 表示魂力增加 100~120 中间的随机值
GOLD 金属性增伤变化
WOOD 木属性增伤变化
WATER 水属性增伤变化
FIRE 火属性增伤变化
EARTH 土属性增伤变化
ELEMENT 人物初始的元素 ELEMENT>FIRE 判断这个人是否有火属性
ITEM 道具物品 ITEM:+1 获取ID为1的物品

函数：
RESULT(id) 获取指定 SELECT 阶段的选择结果
*/

export type EventType = 'TIP' | 'SELECT';

export interface SelectOption {}

export interface SoulEggEvent {
  id: string; // ID 由数字横杠数字横杠数字代表再第几阶段第几步，最后一个数字是该阶段内的ID递增
  type: EventType; // 该步骤的类型
  text: string; // 描述文案
  time?: number; // 此阶段消耗游戏时间线事件 单位（年）
  includes?: string[]; // 包含条件 只有在必须满足其中任意一个条件才能触发
  excludes?: string[]; // 排除条件 有任意一条件的时候就触发不了
  effect?: string[]; // 影响 该事件的造成的影响，一般为值的变化
  options?: SelectOption[];
  next?: boolean;
}
export type SoulEggEvents = SoulEggEvent[];

const events: SoulEggEvents = [
  {
    id: '1-1-1',
    type: 'TIP',
    text: '出生 觉醒魂力 身体光芒 等等的描述',
    time: 2,
    includes: ['STEP=1-1'],
    effect: ['SOUL:+(100~120)'],
    next: true
  },
  {
    id: '1-2-1',
    type: 'TIP',
    text: '学会了跑步 总是喜欢拿这小木棍挥舞，大人都说你长大肯定是一个很厉害的魂师',
    time: 2,
    includes: ['STEP=1-2'],
    effect: ['SOUL:+(200~240)'],
    next: true
  },
  {
    id: '1-3-1',
    type: 'SELECT',
    text: '拜师选择',
    includes: ['STEP=1-3'],
    options: [
      {
        id: 1,
        text: '炎帝',
        includes: ['ELEMENT>FIRE']
      },
      {
        id: 2,
        text: '马保国'
      }
    ]
  },
  {
    id: '1-3-2',
    type: 'TIP',
    text: '你拜了{RESULT(1-3-1)}为师，他怎么怎么的...',
    time: 2,
    includes: ['RESULT(1-3-1)'],
    effect: ['SOUL:+(300~360)', 'FIRE:+0.1'],
    next: true
  },
  {
    id: '1-4-1',
    type: 'SELECT',
    text: '修炼选择',
    time: 2,
    includes: ['STEP=1-4'],
    effect: ['SOUL:+(400~480)'],
    options: []
  }
];

export default events;
