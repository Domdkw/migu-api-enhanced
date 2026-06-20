import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /opNum
     * 获取指定歌曲的播放次数
     * @param ids - 指定的歌曲ID列表，逗号分隔
     */
    app.get('/opNum', async (c) => {
        const ids = c.req.query('ids') ?? '';

        const data = await h5fetch(`https://app.c.nf.migu.cn/opnum/query-optype/v1.0?opType=play&resourceType=2021&ids=${ids}`);
        return c.json({
            success: true,
            data
        });
    });
}