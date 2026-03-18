
neptune.Shell.attachInit((data) => {
    console.log("prom_load_init_master", "Init", data);

    AppCache.Load("prom_load_init_sync", {
        load: "download",
    });
    AppCache.Load("prom_load_second_sync", {
        load: "init",
        parentObject: secondSync,
        startParams: {
            one: "Init secondSync 44",
            two: "Init secondSync 45",
        }
    });
});

neptune.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_init_master", "Before Display", data);
});
