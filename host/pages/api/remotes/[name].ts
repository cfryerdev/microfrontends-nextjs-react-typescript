import type { NextApiRequest, NextApiResponse } from 'next';

const fetchRemoteFromEnv = (text: string) => {
    var remoteUrl = process.env[`REMOTE_${text.toUpperCase()}`];
    return remoteUrl ? remoteUrl : null;
}

const setTitleCasing = (text: string) => {
    return text.replace(/([^\W_]+[^\s-]*) */g, (txt: string) => {
        return txt.charAt(0)
            .toUpperCase() + txt.substr(1)
            .toLowerCase();
    });
};

const setRemoteModuleName = (text: string) => {
    return text
        .toLocaleLowerCase()
        .replace(' ', '_')
        .replace('-', '');
};

const getRemotesFromConfiguration = () => {
    let obj = [] as Array<any>;
    var remotes = Object.entries(process.env);
    remotes.forEach((rem) => {
        var scope = rem[0].toLowerCase();
        if (scope.startsWith('remote_')) {
            var url = rem[1];
            var name = scope.replace('remote_', '');
            obj.push({ name, scope, url });
        }
    });
    return obj;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    // TODO: Replace with an actual app config service
    const { name } = req.query;
    res
        .status(200)
        .json({
            key: `Remote:${setTitleCasing(name as string)}`,
            moduleName: `remote_${setRemoteModuleName(name as string)}`,
            value: fetchRemoteFromEnv(name as string),
        })
}
