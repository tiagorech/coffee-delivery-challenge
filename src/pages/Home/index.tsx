import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeList, Heading, Hero, HeroContent, Info } from "./styles";
import { useTheme } from "styled-components";
import { coffees } from "../../../data.json";
import { Card } from "../../components/Card";

export function Home() {
    const theme = useTheme()

    return (
        <div>
            <Hero>
                <HeroContent>
                    <div>
                        <Heading>
                            <h1>Encontre o café perfeito para qualqeur hora do dia</h1>
                            <span>
                                Com o Coffee Delivery você recebe o seu café onde estiver, a
                                qualquer hora
                            </span>
                        </Heading>

                        <Info>
                            <div>
                                <ShoppingCart
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme['yellow-dark'] }}
                                />
                                <span>Compra simples e segura</span> 
                            </div>

                            <div>
                                <Package 
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme['base-text'] }}
                                /> 
                                <span>Embalagem mantém o café intacto</span>
                            </div>

                            <div>
                                <Timer 
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme['yellow'] }}
                                /> 
                                <span>Entrega rápida e rastreada</span>
                            </div>

                            <div>
                                <Coffee 
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme['purple'] }}
                                /> 
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </Info>
                    </div>

                    <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
                </HeroContent>
                <img src="/images/hero-bg.svg" id="hero-bg" alt=""/>
            </Hero>

            <CoffeeList>
                <h2>Nossos cafés</h2>

                <div>
                    {coffees.map((coffee) => (
                        <Card key={coffee.id} coffee={coffee}/>
                    ))}
                </div>
                
            </CoffeeList>
        </div>
    )
}