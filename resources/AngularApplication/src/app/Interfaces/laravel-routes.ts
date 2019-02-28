/**
 * THIS FILE WAS AUTO GENERATED PLEASE DO NOT EDIT THIS
 * - laravel routes was compile with lang files
 * @author Gritzko D. Kleiner <gkleiner@luxfacta.com>
 */
export const lararoutes = {
    passport: {
        authorizations: {
            authorize: '/oauth/authorize',
            approve: '/oauth/authorize',
            deny: '/oauth/authorize'
        },
        tokens: {
            index: '/oauth/tokens',
            destroy: '/oauth/tokens/'
        },
        token: {
            index: '/oauth/token',
            refresh: '/oauth/token/refresh'
        },
        clients: {
            index: '/oauth/clients',
            store: '/oauth/clients',
            update: '/oauth/clients/',
            destroy: '/oauth/clients/'
        },
        scopes: {
            index: '/oauth/scopes'
        },
        personal: {
            tokens: {
                index: '/oauth/personal-access-tokens',
                store: '/oauth/personal-access-tokens',
                destroy: '/oauth/personal-access-tokens/'
            }
        }
    },
    panel: {
        user: '/api/panel/user'
    },
    site: {
        test: '/api/site/test'
    },
    index: '/'
}
