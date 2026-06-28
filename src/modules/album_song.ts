import { h5fetch } from '../utils/h5fetch';

export const getAlbumSong = async (albumId: string, page: number = 1) => {
    return await h5fetch(`http://app.c.nf.migu.cn/MIGUM3.0/resource/album/song/v2.0?albumId=${albumId}&pageNo=${page}`);
};
