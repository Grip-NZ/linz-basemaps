// TODO load these from env vars
export const Const = {
    Aws: {
        Region: 'ap-southeast-2',
    },
    ApiKey: {
        QueryString: 'api',
        TableName: 'ApiKey',
        RequestLimitMinute: 1000,
    },
};

export const Env = {
    /** Current version number for basemaps */
    Version: 'BASEMAPS_VERSION',
    /** Current git commit hash */
    Hash: 'BASEMAPS_HASH',
    /** S3 bucket where all the COGS are stored */
    CogBucket: 'COG_BUCKET',

    /** How many tiffs to load at one time */
    TiffConcurrency: 'TIFF_CONCURRENCY',

    /** Batch Index offset used to controll mutliple batch jobs */
    BatchIndex: 'AWS_BATCH_JOB_ARRAY_INDEX',

    Gdal: {
        /** Should the gdal docker container be used? */
        UseDocker: 'GDAL_DOCKER',
        /** GDAL container information to use when building cogs */
        DockerContainer: 'GDAL_DOCKER_CONTAINER',
        DockerContainerTag: 'GDAL_DOCKER_CONTAINER_TAG',
    },

    /** Load a environment var defaulting to defaultOutput if it does not exist  */
    get(envName: string, defaultOutput = ''): string {
        return process.env[envName] ?? defaultOutput;
    },

    /** Load an environment variable as a float, defaulting to defaultNumber if it does not exist */
    getNumber(envName: string, defaultNumber: number): number {
        const current = Env.get(envName);
        if (current == '') {
            return defaultNumber;
        }

        const output = parseFloat(current);
        if (isNaN(output)) {
            return defaultNumber;
        }
        return output;
    },
};
