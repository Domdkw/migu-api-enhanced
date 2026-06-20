import type { Hono } from 'hono';
import { h5fetch } from '../utils/h5fetch';

export default function (app: Hono) {
    /**
     * GET /resourceinfo
     * 获取资源信息
     * @param resourceId - 资源ID
     * @param resourceType - 资源类型 2:音乐 2002:作曲家 2003:专辑 2021:歌单
     */
    app.get('/resourceinfo', async (c) => {
        const resourceId = c.req.query('resourceId') ?? '';
        const resourceType = c.req.query('resourceType') ?? 2;

        const data = await h5fetch(`https://app.u.nf.migu.cn//MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${resourceId}&resourceType=${resourceType}`);
        return c.json({
            success: true,
            data
        });
    });
}