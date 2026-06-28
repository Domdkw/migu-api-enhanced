import { h5fetch } from '../utils/h5fetch';

export const getRecommendSong = async (size: number = 20, scene: string = 'TODAY_RECOMMEND') => {
    return await h5fetch(`http://app.c.nf.migu.cn/resource-dataloader/recommend-song/v1.0?actionId=1&scene=${scene}&size=${size}`);
};
