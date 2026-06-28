import { h5fetch } from '../utils/h5fetch';

export const getComment = async (resourceId: string, resourceType: number = 2, hotCommentStart: number = 0, size: number = 20) => {
    return await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/user/comment/stack/v1.0?hotCommentStart=${hotCommentStart}&pageSize=${size}&queryType=1&resourceId=${resourceId}&resourceType=${resourceType}`);
};
