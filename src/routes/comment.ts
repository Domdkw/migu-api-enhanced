import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /comment
     * 获取评论
     * @param resourceId - 资源 ID
     * @param resourceType - 资源类型，默认为2，1为歌曲，2为专辑
     * @param hotCommentStart - 热门评论起始位置，默认为0
     * @param size - 每页数量，默认为20
     */
    app.get('/comment', async (c) => {
        const id = c.req.query('resourceId') ?? '';
        const size = c.req.query('size') ?? 20;
        const resourceType = c.req.query('resourceType') ?? 2;
        const hotCommentStart = c.req.query('hotCommentStart') ?? 0;

        const data = await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/user/comment/stack/v1.0?hotCommentStart=${hotCommentStart}&pageSize=${size}&queryType=1&resourceId=${id}&resourceType=${resourceType}`);
        return c.json({
            success: true,
            data
        });
    });
}