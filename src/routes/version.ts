import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /version
     * 获取安装包
     * @param channel - 渠道
     * @param version - 版本号
     * @param ua - 用户代理
     */
    app.get('/version', async (c) => {
        const channel = c.req.query('channel') ?? '0146921';
        const version = c.req.query('version') ?? '8.4.0';
        const ua = c.req.query('ua') ?? 'Android_migu';

        const data = await h5fetch(
            `http://app.c.nf.migu.cn/MIGUM2.0/resource/client/version/v1.0`
        ,{
            headers:{
                "channel": channel,
                "ua": ua,
                "version": version
            }
        });
        return c.json({
            success: true,
            data
        });
    });
}