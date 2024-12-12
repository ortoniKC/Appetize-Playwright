import { test, expect } from '@appetize/playwright';
test.use({
    config: {
    },
})

test.only('WaitFor Demo', async ({ session }) => {

    await expect(session).toHaveElement({
        attributes: {
            "content-desc": "Welcome to GitHub Profile Viewer"
        },
    });
    await expect(session).toHaveElement({
        attributes: {
            "resource-id": "user_input"
        }
    });
    await session.tap({
        element: {
            attributes: {
                "resource-id": "user_input"
            }
        }
    });
    await session.type("ortonikc");
    await session.tap({
        element: {
            attributes: {
                "resource-id": "search_button"
            }
        }
    });
    await expect(session).toHaveElement({
        attributes: {
            "content-desc": "Koushik Chatterjee"
        },
    });
    await session.tap({
        element:{
            attributes:{
                "content-desc":"Show Repositories"
            }
        }
    });
    const repoListResponse = await session.waitForEvent("network", event =>{
        return event.type == "response";
    });
    console.log(repoListResponse.request.queryString) 
})
