import { h5fetch } from '../utils/h5fetch';

export const getUrlV1 = async (contentId: string, copyrightId: string, resourceType: string = '2') => {
    return await h5fetch(
        `https://app.c.nf.migu.cn/MIGUM3.0/strategy/pc/listen/v1.0?contentId=${contentId}&copyrightId=${copyrightId}&resourceType=${resourceType}&toneFlag=PQ`,
        {
            headers: {
                "Channel": "014X031"
            }
        }
    );
};
