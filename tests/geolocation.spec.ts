import { test, expect } from '@appetize/playwright';

const location = {
    longitude: 80.0,
    latitude: 12.0
}

test.use({
    config: {
        grantPermissions: true,
        location: [location.latitude, location.longitude]
    },
})

test('Android - Geo Location demo', async ({ session }) => {

    await session.tap({
        element: {
            attributes: {
                "content-desc": "Set Location"
            }
        }
    });
    await session.tap({
        element: {
            attributes: {
                "content-desc": "Get Current Location"
            }
        }
    });
    await session.tap({
        element: {
            attributes: {
                "text": "OK"
            }
        }
    });
    await session.waitForElement({
        attributes: {
            "content-desc": `Latitude: ${location.latitude.toFixed(1)}, Longitude: ${location.longitude.toFixed(1)}`
        }
    })

})