import { h5fetch } from '../utils/h5fetch';

export const getSingerAlbum = async (singerId: string) => {
    return await h5fetch(`http://app.c.nf.migu.cn/bmw/singer/album/v1.0?singerId=${singerId}`);
};
