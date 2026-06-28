import { h5fetch } from '../utils/h5fetch';

export const getPlaylistInfo = async (playlistId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/resource/playlist/v2.0?playlistId=${playlistId}`);
};
