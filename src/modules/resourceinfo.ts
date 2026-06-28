import { h5fetch } from '../utils/h5fetch';

export const getResourceInfo = async (resourceId: string, resourceType: number = 2) => {
    return await h5fetch(`https://app.u.nf.migu.cn//MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${resourceId}&resourceType=${resourceType}`);
};
