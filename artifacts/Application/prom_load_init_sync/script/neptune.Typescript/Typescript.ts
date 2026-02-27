neptune.Shell.attachInit((data) => {
    console.log("prom_load_init_sync", "Init", data);
});

neptune.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_init_sync", "Before Display", data);
});