import { defineConfig } from "@playwright/test";
import { AppetizeTestOptions } from "@appetize/playwright";


export default defineConfig<AppetizeTestOptions>({
    testDir: './tests',
    outputDir: 'test-results/',
    timeout: 120 * 1000,
    expect: {
        toMatchSnapshot: {
            maxDiffPixelRatio: 0.05,
        }
    },
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 0,
    reporter: "html",
    workers: 1,
    fullyParallel: false,
    use: {
        headless: false,
        trace: 'retain-on-failure',
        baseURL: 'https://appetize.io',
        config: {
            device: 'pixel8pro',
            publicKey: '',
        },
    },
})