import { h5fetch } from '../utils/h5fetch';

export const getSearchSingerTab = async () => {
    return await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/bmw/singer-index/tabs/v2.0`);
};
