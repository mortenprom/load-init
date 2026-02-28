
sap.n.Shell.attachInit((data) => {
    console.log("prom_load_init_master", "Init", data);
    AppCache.Load("prom_load_init_sync", {
        load: "init",
        // parentObject: syncContainer,
        appGUID: "master_sync_app",
        startParams: {
            one: "One",
            two: "Two",
        }
    });
});

sap.n.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_init_master", "Before Display", data);
});
