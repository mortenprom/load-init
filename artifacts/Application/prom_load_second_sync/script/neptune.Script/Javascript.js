neptune.Shell.attachInit((data) => {
    console.log("prom_load_second_sync", "Init", data);
});

neptune.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_second_sync", "Before Display", data);
});