import { h5fetch } from '../utils/h5fetch';

export const getRankIndex = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/rank/rank-index/v1.0`);
};
