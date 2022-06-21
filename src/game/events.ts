/*
符号描述：
= 用于判断某变量是否符合某值
: 对某只进行赋值
+ 正值
- 负值
~ 值的范围区间 （x~y，x和y都在可选范围内）
> 一般用于值的大小条件判断，特殊情况：ELEMENT>FIRE 判断是否包含火元素、ITEM>1 表示判断当前人是否有ID是1的物品
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
ITEM 道具物品 ITEM:[100]+1 获取1件ID为100的物品
DAMAGE 伤害值

函数：
RESULT(id) 获取指定 SELECT 阶段的选择结果
*/

// 道具
export type ItemType = 'WEAPON' | 'FOOD';
export const items = [
  {
    id: 1,
    type: 'WEAPON',
    name: '闪电鞭',
    effect: ['DAMAGE:*1.1'] // 全属性伤害 *1.2
  },
  {
    id: 2,
    type: 'WEAPON',
    name: '青钢剑',
    effect: ['DAMAGE_GOLD:*1.2'] // 金属性伤害 *1.2
  }
];

export type EventType = 'TIP' | 'SELECT';

export interface SelectOption {
  id: number | string;
  text: string;
  includes?: string;
}

export interface SoulEggEvent {
  id: string; // ID 由数字横杠数字横杠数字代表再第几阶段第几步，最后一个数字是该阶段内的ID递增 没有实际意义
  type: EventType; // 该步骤的类型
  text: string; // 描述文案
  time?: number; // 此阶段消耗游戏时间线事件 单位（年）
  includes?: string; // 满足条件才能被随机到 （[TIME=1~2] 中括号包裹的是一个单元）（[TIME=1~2]&[ELEMENT>FIRE] 并且）（([TIME=1~2]|[TIME=5~6])&[ELEMENT>FIRE]）组合使用
  excludes?: string[]; // 排除条件 有任意一条件的时候就触发不了
  effect?: string[]; // 影响 该事件的造成的影响，一般为值的变化
  options?: SelectOption[];
  only?: boolean; // 唯一事件，该事件只会触发一次
}
export type SoulEggEvents = SoulEggEvent[];

const events: SoulEggEvents = [
  {
    id: '1-1-1',
    type: 'TIP',
    text: '出生 觉醒魂力 身体光芒 等等的描述',
    time: 2,
    includes: '[TIME=0]',
    effect: ['SOUL:+(100~120)']
  },
  {
    id: '1-2-1',
    type: 'TIP',
    text: '学会了跑步 总是喜欢拿这小木棍挥舞，大人都说你长大肯定是一个很厉害的魂师',
    time: 2,
    includes: '[TIME=1~2]',
    effect: ['SOUL:+(200~240)']
  },
  {
    id: '1-3-1',
    type: 'SELECT',
    text: '拜师选择',
    includes: '[TIME=3~4]',
    only: true,
    options: [
      {
        id: 1,
        text: '炎帝',
        includes: '[ELEMENT>FIRE]'
      },
      {
        id: 2,
        text: '马保国'
      },
      {
        id: 3,
        text: '赵日天'
      },
      {
        id: 4,
        text: '独自修炼'
      }
    ]
  },
  {
    id: '1-3-2',
    type: 'TIP',
    text: '你拜了炎帝为师，他带你去了无尽火域，怎么怎么的...',
    time: 2,
    includes: '[RESULT(1-3-1)=1]',
    effect: ['SOUL:+(300~360)', 'FIRE:+(10~15)']
  },
  {
    id: '1-3-3',
    type: 'TIP',
    text: '你拜了马保国为师，他教了你闪电五连鞭...',
    time: 2,
    includes: '[RESULT(1-3-1)=2]',
    effect: ['SOUL:+(320~360)']
  },
  {
    id: '1-4-1',
    type: 'SELECT',
    text: '修炼选择',
    includes: '[TIME=5~6]',
    options: [
      {
        id: 1,
        text: '修练魂力'
      },
      {
        id: 2,
        text: '练闪五连鞭',
        includes: '[RESULT(1-3-1)=2]'
      }
    ]
  },
  {
    id: '1-4-2',
    type: 'TIP',
    text: '修炼魂力，魂力得到了提升',
    time: 2,
    includes: '[RESULT(1-4-1)=1]',
    effect: ['SOUL:+(500~600)'] // 修炼魂力魂力得到大幅提升
  },
  {
    id: '1-4-3',
    type: 'TIP',
    text: '你拜了马保国为师，他教了你闪电五连鞭...',
    time: 2,
    includes: '[RESULT(1-4-1)=2]',
    effect: ['SOUL:+(400~480)', 'ITEM:[1]+1'] // 修炼武器
  }
];

export default events;
