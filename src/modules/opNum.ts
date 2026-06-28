import { h5fetch } from '../utils/h5fetch';

export const getOpNum = async (ids: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/opnum/query-optype-v1.0?opType=play&resourceType=2021&ids=${ids}`);
};
