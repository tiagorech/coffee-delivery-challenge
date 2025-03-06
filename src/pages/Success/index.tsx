import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Container, Heading, Info, InfoContent, Order } from "./styles";
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";

export function Success() {
    const { orders } = useCart()
    const { orderId } = useParams()
    const orderInfo = orders.find((order) => order.id === Number(orderId))
    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro'
    }
    const theme = useTheme()

    if (!orderInfo?.id) {
        return null
    }

    return (
        <Container>
            <Order>
                <Heading>
                  <h2>Uhu! Pedido confirmado</h2>  
                  <span>Agora é só aguardar que logo o café chegará até você</span>
                </Heading>

                <Info>
                    <InfoContent>
                        <div>
                            <MapPin 
                                color={theme.white}
                                style={{ backgroundColor: theme["purple"] }}
                                size={32}
                            />

                            <div>
                                <span>
                                    Entrega em{' '}
                                    <strong>
                                        {orderInfo.street}, {orderInfo.number}
                                    </strong>
                                </span>

                                <span>
                                    {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                                </span>
                            </div>
                        </div>

                        <div>
                            <Timer 
                                color={theme.white}
                                style={{ backgroundColor: theme["yellow-dark"] }}
                                size={32}
                            />

                            <div>
                                <span>Previsão de entrega</span>

                                <strong>20 min - 30 min</strong>
                            </div>
                        </div>

                        <div>
                            <CurrencyDollar 
                               color={theme.white}
                               style={{ backgroundColor: theme["yellow-dark"] }}
                               size={32} 
                            />

                            <div>
                                <span>Pagamento na entrega</span>

                                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                            </div>
                        </div>
                    </InfoContent>
                </Info>
            </Order>

            <img src="/images/delivery.svg" alt="Pedido concluído" />
        </Container>
    )
}