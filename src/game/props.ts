export type PropType = 'WEAPON' | 'FOOD';

export interface SoulEggProp {
  id: number;
  type: PropType;
  name: string;
  text: string;
  effect: string[];
}
export type SoulEggProps = SoulEggProp[];

const props: SoulEggProps = [
  {
    id: 1,
    type: 'WEAPON',
    name: '闪电鞭',
    text: '道具描述...',
    effect: ['DAMAGE:*1.1'] // 全属性伤害 *1.2
  },
  {
    id: 2,
    type: 'WEAPON',
    name: '青钢剑',
    text: '道具描述...',
    effect: ['DAMAGE_GOLD:*1.2'] // 金属性伤害 *1.2
  },
  {
    id: 3,
    type: 'FOOD', // 食物 一次性道具
    name: '天火丹',
    text: '道具描述...',
    effect: ['GOLD:+1', 'SOUL:+100'] // 火属性值增加1点 魂力增加100点
  }
];

export default props;
