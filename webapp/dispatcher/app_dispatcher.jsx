// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import * as Flux from 'flux';

import Constants from 'utils/constants.jsx';
const PayloadSources = Constants.PayloadSources;

const AppDispatcher = Object.assign(new Flux.Dispatcher(), {
    handleServerAction: function performServerAction(action) {
        if (!action.type) {
            console.log('handleServerAction called with undefined action type'); // eslint-disable-line no-console
        }

        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action
        };
        this.dispatch(payload);
    },

    handleViewAction: function performViewAction(action) {
        if (!action.type) {
            console.log('handleServerAction called with undefined action type'); // eslint-disable-line no-console
        }

        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action
        };
        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;
