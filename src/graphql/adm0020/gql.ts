import { gql } from '@apollo/client';

export const adm0020GetOrderListQuery = gql`
	query adm0020GetOrderList($orderDate: String!) {
		adm0020GetOrderList(ORDER_DATE: $orderDate) {
			OUT_RET_CODE
			OUT_RET_MSG
			OUT_RESULT {
				HELP_CENTER
			}
		}
	}
`;