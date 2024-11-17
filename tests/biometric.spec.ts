import { test, expect } from '@appetize/playwright'

test('Android - BioMetric auth demo', async ({ session }) => {

    await session.tap({
        element: {
            attributes: {
                "content-desc": "Biometry"
            }
        }
    });
    await session.tap({
        element: {
            attributes: {
                "content-desc": "Authenticate"
            }
        }
    });

    await session.waitForAnimations();

    await session.biometry({
        match: true
    });

    await session.waitForElement({
        attributes: {
            "content-desc": "Authenticated"
        }
    });

})