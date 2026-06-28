import { h5fetch } from '../utils/h5fetch';

export const getPlaylistSong = async (playlistId: string, page: number = 1, size: number = 20) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?pageNo=${page}&pageSize=${size}&playlistId=${playlistId}`);
};
