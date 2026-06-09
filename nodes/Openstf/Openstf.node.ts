import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';

export class Openstf implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'openstf',
		name: 'N8nDevOpenstf',
		icon: { light: 'file:./openstf.png', dark: 'file:./openstf.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Control and manages real Smartphone devices from browser and restful apis',
		defaults: { name: 'openstf' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOpenstfApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "User",
					"value": "User",
					"description": "User Operations"
				}
			],
			"default": ""
		},
		...userDescription
		],
	};
}
