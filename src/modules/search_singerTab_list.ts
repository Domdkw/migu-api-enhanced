import { h5fetch } from '../utils/h5fetch';

export const getSearchSingerTabList = async (tab: string = '') => {
    return await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/bmw/singer-index/list/v1.0?tab=${tab}&templateVersion=3`);
};
