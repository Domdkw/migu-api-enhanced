import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /recommend/song
     * 获取推荐歌曲
     * @param size - 数量，默认20
     * @param scene - 场景，默认TODAY_RECOMMEND
     */
    app.get('/recommend/song', async (c) => {
        const size = c.req.query('size') ?? 20;
        const scene = c.req.query('scene') ?? 'TODAY_RECOMMEND';
        //需要ce,但是现在还没有逆向成功
        const data = await h5fetch(`http://app.c.nf.migu.cn/resource-dataloader/recommend-song/v1.0?actionId=1&scene=${scene}&size=${size}`);
        return c.json({
            success: true,
            data
        });
    });
}