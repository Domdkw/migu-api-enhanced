import { h5fetch } from '../utils/h5fetch';

export const getVersion = async (channel: string = '0146921', version: string = '8.4.0', ua: string = 'Android_migu') => {
    return await h5fetch(
        `http://app.c.nf.migu.cn/MIGUM2.0/resource/client/version/v1.0`,
        {
            headers: {
                "channel": channel,
                "ua": ua,
                "version": version
            }
        }
    );
};
