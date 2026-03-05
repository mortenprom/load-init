
sap.n.Shell.attachInit((data) => {
    console.log("prom_load_init_master", "Init", data);
    // AppCache.Load("prom_load_init_sync", {
    //     load: "init",
    //     parentObject: syncContainer,
    //     // appGUID: "child_sync_app",
    //     startParams: {
    //         one: "One",
    //         two: "Two",
    //     }
    // });
    // AppCache.Load("prom_load_second_sync", {
    //     load: "init",
    //     parentObject: secondSync,
    // });
    // AppCache.Load("prom_load_third_dia", {
    //     load: "init",
    //     dialogShow: true,
    // });
});

sap.n.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_init_master", "Before Display", data);
});
