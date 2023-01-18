import type { NextApiRequest, NextApiResponse } from 'next';

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
	res
		.status(200)
		.json({ remotes: getRemotesFromConfiguration() })
}
