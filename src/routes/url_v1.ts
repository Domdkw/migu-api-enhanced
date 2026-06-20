import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /url/v1
     * 获取歌曲播放地址
     */
    app.get('/url/v1', async (c) => {
        const contentId = c.req.query('contentId') || '';
        const copyrightId = c.req.query('copyrightId') || '';
        
        const data = await h5fetch(
            `https://app.c.nf.migu.cn/MIGUM3.0/strategy/pc/listen/v1.0?contentId=${contentId}&copyrightId=${copyrightId}&resourceType=2&toneFlag=PQ`
            ,{
                headers: {
                    "Channel": "014X031"
                }
            },);
        return c.json({
            success: true,
            data
        });
    });
}