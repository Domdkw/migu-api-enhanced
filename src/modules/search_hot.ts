import { h5fetch } from '../utils/h5fetch';

export const getSearchHot = async () => {
    return await h5fetch(`https://app.u.nf.migu.cn/bmw/hot-search/search-rank-list/v1.0`);
};
