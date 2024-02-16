import { createRequire } from 'module';

const require = createRequire(import.meta.url);

x();

class Loader {
    constructor() {
        this.init();
    }
    init() {
        this.load();
    }
    async load() {
        try {
            await require('./../packages/server');
        } catch (error) {
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} bin/loader:${'\x1b[0m'}`, error.message);
        } for (const core of mp.events.getAllOf("packagesLoaded")) {
            try {
                await core();
            } catch (error) {
                console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} bin/loader:${'\x1b[0m'}`, error.message);
            }

        }
        mp.events.remove('packagesLoaded');
        mp.events.initialized = true;
    }
}

new Loader();