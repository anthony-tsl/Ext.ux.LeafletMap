// enable Ext autoloader
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'LeafletMapDemo',

    statusBarStyle: 'black',
    viewport: {
        // hide navigation bar of browser
        autoMaximize: true
    },

    views: [
        'Main'
    ],

    controllers: [
        'Map'
    ],

    // launch function is called as soon as app is ready
    launch: function() {
        Ext.Viewport.add(Ext.create('LeafletMapDemo.view.Main'));
    }
});
