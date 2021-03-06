import React, { Component } from 'react'
import { connect } from "react-redux"
import { Grid, Segment, Card, Message } from "semantic-ui-react"
import { Line } from "react-chartjs-2"
import { translate, Trans } from "react-i18next";
import _ from "lodash"

import { requestInfo, requestTpsInfo, requestPlayerInfo } from "../../actions/dashboard"


class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.requestData = this.requestData.bind(this);

		const _t = props.t

		this.line = {
			datasets: [
				{
					label: _t("AverageTPS"),
					fill: false,
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					pointRadius: 0,
					pointHitRadius: 10,
					xAxisID: "time",
					yAxisID: "tps",
				},
				{
					label: _t("OnlinePlayers"),
					fill: false,
					backgroundColor: 'rgb(54, 162, 235)',
					borderColor: 'rgb(54, 162, 235)',
					pointRadius: 0,
					pointHitRadius: 10,
					xAxisID: "time",
					yAxisID: "players",
				}
			]
		};

		this.options = {
			maintainAspectRatio: false,
			legend: {
				display: false,
			},
			scales: {
				xAxes: [{
					id: "time",
					type: "time",
					time: {
						displayFormats: {
								second: "HH:mm:ss",
								minute: "HH:mm",
								hour: "HH:mm",
								day: "DD.MM.YYYY",
						},
						tooltipFormat: "DD.MM.YYYY HH:mm:ss"
					}
				}],
				yAxes: [{
					type: "linear",
					id: "tps",
					ticks: {
						beginAtZero: true,
						max: 20,
						min: 0,
					},
					scaleLabel: {
						display: true,
						labelString: _t("NumTPS"),
					},
				},{
					type: "linear",
					id: "players",
					gridLines: {
						drawOnChartArea: false,
					},
					ticks: {
						beginAtZero: true,
						min: 0,
					},
					scaleLabel: {
						display: true,
						labelString: _t("NumPlayers"),
					},
					position: "right",
				}]
			},
		};
	}

	requestData() {
		this.props.requestInfo();
		this.props.requestTpsInfo();
		this.props.requestPlayerInfo();
	}

	componentDidMount() {
		this.requestData();
		
		this.interval = setInterval(this.requestData, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		if (!this.props.data)
			return null;

		const _t = this.props.t

		this.line.datasets[0].data = _.map(this.props.tps, tps => ({
			x: new Date(tps.timestamp * 1000),
			y: tps.value,
		}))
		this.line.datasets[1].data = _.map(this.props.players, pls => ({
			x: new Date(pls.timestamp * 1000),
			y: pls.value,
		}))

		let playerState = "blue";
		if (this.props.data) {
			const ratio = this.props.data.players / this.props.data.maxPlayers;
			if (ratio > 0.95)
				playerState = "red";
			else if (ratio > 0.8)
				playerState = "yellow";
			else
				playerState = "green";
		}

		let tpsState = "blue";
		if (this.props.data) {
			if (this.props.data.tps >= 19.5)
				tpsState = "green";
			else if (this.props.data.tps >= 15)
				tpsState = "yellow";
			else
				tpsState = "red";
		}

		return <Segment basic>
			<Message info>
				<Message.Header>{_t("WIPTitle")}</Message.Header>
				<p>
					<Trans i18nKey="WIPText">
						The Web-API AdminPanel is still a work in progress, and not all of it's functionality 
						has been fully implemented yet. This means there may be bugs and other issues when 
						using the AdminPanel!
						<br />
						Please report any bugs you find <a href='https://github.com/Valandur/Web-API/issues' target='_blank' rel='noopener noreferrer'>over on GitHub</a>
					</Trans>
					
				</p>
			</Message>

			<Grid columns={4} stackable doubling>
				
				<Grid.Column>
					<Card color={playerState}>
						<Card.Content>
							<Card.Header>
								{this.props.data.players}/{this.props.data.maxPlayers}
							</Card.Header>
							<Card.Description>
								{_t("PlayersOnline")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card color={tpsState}>
						<Card.Content>
							<Card.Header>
								{this.props.data.tps}
							</Card.Header>
							<Card.Description>
								{_t("CurrentTPS")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card color="blue">
						<Card.Content>
							<Card.Header>
								{this.props.data.address}
							</Card.Header>
							<Card.Description>
								{_t("ServerAddress")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card color="blue">
						<Card.Content>
							<Card.Header>
								{this.props.data.onlineMode ? "Yes" : "No"}
							</Card.Header>
							<Card.Description>
								{_t("OnlineMode")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card color="blue">
						<Card.Content>
							<Card.Header>
								{this.props.data.uptimeTicks}
							</Card.Header>
							<Card.Description>
								{_t("UptimeTicks")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card color="blue">
						<Card.Content>
							<Card.Header>
								{this.props.data.game.version}
							</Card.Header>
							<Card.Description>
								{_t("MinecraftVersion")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card color="blue">
						<Card.Content>
							<Card.Header>
								{this.props.data.api.version}
							</Card.Header>
							<Card.Description>
								{_t("APIVersion")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card color="blue">
						<Card.Content>
							<Card.Header>
								{this.props.data.implementation.version}
							</Card.Header>
							<Card.Description>
								{_t("SpongeVersion")}
							</Card.Description>
						</Card.Content>
					</Card>
				</Grid.Column>

			</Grid>

			<Card style={{ width: "100%", height: "50vh" }}>
				<Card.Content>
					<Card.Header>
						{_t("GraphTitle")}
					</Card.Header>
				</Card.Content>
				<div style={{ width: "100%", height: "100%", padding: "1em" }}>
					<Line data={this.line} options={this.options} />
				</div>
			</Card>

		</Segment>
	}
}

const mapStateToProps = (_state) => {
	const state = _state.dashboard

	return {
		data: state.data,
		tps: state.tps,
		players: state.players,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		requestInfo: () => dispatch(requestInfo()),
		requestTpsInfo: () => dispatch(requestTpsInfo()),
		requestPlayerInfo: () => dispatch(requestPlayerInfo()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(translate("Dashboard")(Dashboard));
