"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97656],{97656:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/antd/src/index.tsx","description":"`<DeleteButton>` uses Ant Design\'s {@link https://ant.design/components/button/ `<Button>`} and {@link https://ant.design/components/button/ `<Popconfirm>`} components.\\nWhen you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the `useDelete` method provided by your `dataProvider`.","displayName":"DeleteButton","props":{"hideText":{"defaultValue":{"value":"false"},"description":"Whether should hide the text and show only the icon or not.","name":"hideText","required":false,"type":{"name":"boolean"},"tags":{}},"resourceNameOrRouteName":{"defaultValue":{"value":"Reads `:resource` from the URL"},"description":"Resource name for API data interactions","name":"resourceNameOrRouteName","required":false,"type":{"name":"string"},"tags":{"default":"Reads `:resource` from the URL","deprecated":"Please use `resource` instead."}},"resource":{"defaultValue":{"value":"Inferred resource name from the route"},"description":"Resource name for API data interactions. `identifier` of the resource can be used instead of the `name` of the resource.","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Inferred resource name from the route"}},"accessControl":{"defaultValue":{"value":"`{ enabled: true }`"},"description":"Access Control configuration for the button","name":"accessControl","required":false,"type":{"name":"{ enabled?: boolean; hideIfUnauthorized?: boolean; } | undefined"},"tags":{"default":"`{ enabled: true }`"}},"recordItemId":{"defaultValue":{"value":"Reads `:id` from the URL"},"description":"Data item identifier for the actions with the API","name":"recordItemId","required":false,"type":{"name":"[BaseKey](/docs/core/interface-references/#basekey)"},"tags":{"default":"Reads `:id` from the URL"}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: unknown, values?: unknown, resource?: string) => false | OpenNotificationParams)"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: unknown, values?: unknown, resource?: string) => false | OpenNotificationParams)"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"onSuccess":{"defaultValue":null,"description":"Callback function to be called after the delete action is successful","name":"onSuccess","required":false,"type":{"name":"(value: DeleteOneResponse) => void"},"tags":{}},"mutationMode":{"defaultValue":{"value":"`mutationMode` setting from the `Refine` component"},"description":"Mutation mode for the delete action","name":"mutationMode","required":false,"type":{"name":"\\"pessimistic\\" | \\"optimistic\\" | \\"undoable\\"","raw":"MutationMode","value":[{"value":"\\"pessimistic\\""},{"value":"\\"optimistic\\""},{"value":"\\"undoable\\""}]},"tags":{"default":"`mutationMode` setting from the `Refine` component"}},"meta":{"defaultValue":null,"description":"Additional meta data to pass to the delete mutation from the data provider","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Additional meta data to pass to the delete mutation from the data provider","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"dataProviderName":{"defaultValue":{"value":"`\\"default\\"`"},"description":"Target data provider name for API call to be made","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{"default":"`\\"default\\"`"}},"confirmTitle":{"defaultValue":{"value":"`\\"Are you sure?\\"` or `\\"buttons.confirm\\"` from the i18n provider"},"description":"Text to be displayed in the confirmation popup","name":"confirmTitle","required":false,"type":{"name":"string"},"tags":{"default":"`\\"Are you sure?\\"` or `\\"buttons.confirm\\"` from the i18n provider"}},"confirmOkText":{"defaultValue":{"value":"`\\"Delete\\"` or `\\"buttons.delete\\"` from the i18n provider"},"description":"Confirmation button text to be displayed in the confirmation popup","name":"confirmOkText","required":false,"type":{"name":"string"},"tags":{"default":"`\\"Delete\\"` or `\\"buttons.delete\\"` from the i18n provider"}},"confirmCancelText":{"defaultValue":{"value":"`\\"Cancel\\"` or `\\"buttons.cancel\\"` from the i18n provider"},"description":"Cancel button text to be displayed in the confirmation popup","name":"confirmCancelText","required":false,"type":{"name":"string"},"tags":{"default":"`\\"Cancel\\"` or `\\"buttons.cancel\\"` from the i18n provider"}},"invalidates":{"defaultValue":{"value":"`[\\"list\\", \\"many\\"]`"},"description":"Query keys to be invalidated after the delete action is successful","name":"invalidates","required":false,"type":{"name":"(keyof IQueryKeys)[]"},"tags":{"default":"`[\\"list\\", \\"many\\"]`"}}},"generatedAt":1705671210968}')}}]);