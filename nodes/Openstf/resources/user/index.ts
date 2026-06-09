import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Get User",
					"value": "Get User",
					"action": "User Profile",
					"description": "The User Profile endpoint returns information about current authorized user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user"
						}
					}
				},
				{
					"name": "Get User Access Tokens",
					"value": "Get User Access Tokens",
					"action": "Access Tokens",
					"description": "The Access Tokens endpoints returns titles of all the valid access tokens",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/accessTokens"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "GET /user/accessTokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Access Tokens"
					]
				}
			}
		},
];
