import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { Title } from "@/components/base/title";
import { Button, XStack, YStack } from "@/components/base/tamagui";
import { LimitedWidth, NavLink, Row } from "@/components/base/base";

export default async function Index() {
    const canInitSupabaseClient = () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
            createClient();
            return true;
        } catch (e) {
            return false;
        }
    };

    const isSupabaseConnected = canInitSupabaseClient();

    return (
        <div className="fit flex flex-column justify-between items-center">
            <Row className="py1 border-bottom">
                <LimitedWidth>
                    <DeployButton />
                    {isSupabaseConnected && <AuthButton />}
                </LimitedWidth>
            </Row>

            <div className="flex flex-col max-width-4">
                <Header />
                <main className="flex-1 flex flex-col gap-6">
                    <Title>Next steps</Title>
                    <Button variant="outlined" alignSelf="center">
                        Some
                    </Button>
                    <Button alignSelf="center">Some2</Button>
                    <Button variant="active" alignSelf="center">
                        Some
                    </Button>
                    <XStack borderWidth={1} borderColor="$color">
                        <YStack borderWidth={1} flex={1} borderColor="red">
                            <div>1111</div>
                        </YStack>
                        <YStack borderWidth={1} padding="$2" flex={1}>
                            <div>222</div>
                        </YStack>
                        <YStack borderWidth={1} flex={1}>
                            <div>333</div>
                        </YStack>
                    </XStack>
                    <XStack borderWidth={1} className="flex justify-center">
                        <NavLink href="/hospitals">Hospitals</NavLink>
                    </XStack>
                    {isSupabaseConnected ? (
                        <SignUpUserSteps />
                    ) : (
                        <ConnectSupabaseSteps />
                    )}
                </main>
            </div>

            <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
                <p>
                    Powered by
                    <a
                        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                        target="_blank"
                        className="font-bold hover:underline"
                        rel="noreferrer"
                    >
                        Supabase
                    </a>
                </p>
            </footer>
        </div>
    );
}
